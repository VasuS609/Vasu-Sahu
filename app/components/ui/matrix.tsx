"use client";
import React, { useState, useEffect, useRef } from "react";

type Frame = number[][];

type MatrixProps = {
  rows?: number;
  cols?: number;
  ariaLabel?: string;
  size?: number;
  gap?: number;
};

// Prebuilt wave animation
const createWaveFrames = (rows: number, cols: number): Frame[] => {
  const frames: Frame[] = [];
  for (let f = 0; f < 24; f++) {
    const frame: Frame = Array(rows).fill(0).map(() => Array(cols).fill(0));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const wave = Math.sin((c / cols) * Math.PI * 2 + (f / 24) * Math.PI * 2);
        const value = (wave + 1) / 2;
        frame[r][c] = value * 0.6; // Dimmed for ambient effect
      }
    }
    frames.push(frame);
  }
  return frames;
};

// Create ripple effect from cursor
const createCursorPattern = (
  rows: number,
  cols: number,
  mouseX: number,
  mouseY: number,
  containerRect: DOMRect
): Frame => {
  const frame: Frame = Array(rows).fill(0).map(() => Array(cols).fill(0));
  
  // Convert mouse position to grid position
  const gridMouseX = ((mouseX - containerRect.left) / containerRect.width) * cols;
  const gridMouseY = ((mouseY - containerRect.top) / containerRect.height) * rows;
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const distance = Math.sqrt(
        Math.pow(c - gridMouseX, 2) + Math.pow(r - gridMouseY, 2)
      );
      
      // Create a gradient that falls off with distance
      const maxDistance = Math.sqrt(rows * rows + cols * cols);
      const intensity = Math.max(0, 1 - distance / (maxDistance * 0.4));
      frame[r][c] = intensity;
    }
  }
  
  return frame;
};

export const Matrix: React.FC<MatrixProps> = ({ 
  rows = 10, 
  cols = 10, 
  ariaLabel,
  size = 10,
  gap = 2
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentFrame, setCurrentFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const waveFrames = useRef(createWaveFrames(rows, cols)).current;
  
  // Animate wave when not hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % waveFrames.length);
    }, 50); // 20 fps
    
    return () => clearInterval(interval);
  }, [isHovering, waveFrames.length]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  
  // Determine which pattern to use
  const pattern = isHovering && containerRef.current
    ? createCursorPattern(rows, cols, mousePos.x, mousePos.y, containerRef.current.getBoundingClientRect())
    : waveFrames[currentFrame];
  
  const dots: React.ReactNode[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const brightness = pattern[r][c];
      
      dots.push(
        <div
          key={`${r}-${c}`}
          style={{
            width: size,
            height: size,
            borderRadius: 9999,
            background: `rgba(255, 255, 255, ${brightness * 0.9})`,
            boxShadow: brightness > 0.5 
              ? `0 0 ${brightness * 8}px rgba(255, 255, 255, ${brightness * 0.7})`
              : 'none',
            margin: gap,
            transition: isHovering ? 'all 0.1s ease-out' : 'all 0.3s ease-out',
          }}
        />
      );
    }
  }

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
        cursor: 'crosshair',
      }}
    >
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${cols}, auto)`, 
          gap: 0,
          padding: 20,
        }}
      >
        {dots}
      </div>
    </div>
  );
};

// Export a reusable wave frames array for imports like `import { Matrix, wave }`
export const wave = createWaveFrames(7, 7);

// Export Matrix component (already declared above) as a named export
// `Matrix` is exported inline where it's declared above (`export const Matrix = ...`).