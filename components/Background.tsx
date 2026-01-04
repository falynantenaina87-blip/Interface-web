import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-deep-violet">
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4a2b7a_0%,_#2D1B4E_50%)]" />
      
      {/* Floating Sphere 1 (Top Left - Burnt Orange Glow) */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-burnt-orange/30 rounded-full blur-[100px] animate-float-slow mix-blend-screen pointer-events-none" />

      {/* Floating Sphere 2 (Bottom Right - Deep Pink/Violet Glow) */}
      <div className="absolute top-[40%] -right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-sunset-end/20 rounded-full blur-[80px] animate-float-delayed mix-blend-screen pointer-events-none" />
      
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default Background;