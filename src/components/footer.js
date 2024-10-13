import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My React App. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;

