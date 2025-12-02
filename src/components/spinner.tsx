export function Spinner() {
  const spinnerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flexDirection: 'column',
  };

  const ringStyle: React.CSSProperties = {
    position: 'relative',
    width: '150px',
    height: '150px',
  };

  const emojis = ['😎', '🚀', '🌟', '🎯', '🔥', '🌈', '🎨', '⚡', '💎', '🎮'];

  const emojiStyle = (index: number): React.CSSProperties => {
    const angle = (index / emojis.length) * 360;
    const radius = 60;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return {
      position: 'absolute',
      fontSize: '20px',
      left: '50%',
      top: '50%',
      marginLeft: `${x}px`,
      marginTop: `${y}px`,
      transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
    };
  };

  const keyframesStyle = `
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={spinnerStyle}>
      <style>{keyframesStyle}</style>
      <div style={{
        ...ringStyle,
        animation: 'spin 8s linear infinite'
      }}>
        {emojis.map((emoji, index) => (
          <div key={index} style={emojiStyle(index)}>
            {emoji}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Загрузка...
      </div>
    </div>
  );
}
