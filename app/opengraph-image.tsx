import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Bishoy R Mansour - Lead Frontend Developer & UI/UX Designer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            zIndex: 1,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Bishoy R Mansour
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 40,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: 30,
              maxWidth: 900,
            }}
          >
            Lead Frontend Developer & UI/UX Designer
          </div>

          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              marginTop: 20,
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '15px 40px',
                borderRadius: 50,
                fontSize: 28,
                fontWeight: '600',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              9+ Years Experience
            </div>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '15px 40px',
                borderRadius: 50,
                fontSize: 28,
                fontWeight: '600',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              React • Next.js • TypeScript
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          bishoyrmansour.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
