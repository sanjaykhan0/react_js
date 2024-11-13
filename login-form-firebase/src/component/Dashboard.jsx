import React from 'react';

export default function Dashboard() {
  return (
    <div style={outerContainerStyle}>
      <Widget />
    </div>
  );
}

function Widget() {
  const containerStyle = {
    // maxWidth: '100%',
    width: '100%',
    backgroundColor: '#fff',
    padding: '40px 40px',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
  };

  const innerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const avatarContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
  };

  const avatarStyle = {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    border: '3px solid #4B8DCB',
    backgroundColor: '#E5EFFF',
    
  };
  const avatarStyle1 = {
    width: '85px',
    height: '85px',
    borderRadius: '50%',
    // border: '3px solid #4B8DCB',
    backgroundColor: '#E5EFFF',
    
  };

  const titleTextStyle = {
    fontSize: '2em',
    color: '#333',
    fontWeight: '700',
    margin: 0,
  };

  const subtitleTextStyle = {
    color: '#777',
    fontSize: '1em',
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    textAlign: 'center',
    marginTop: '30px',
  };

  const statBoxStyle = {
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#F4F9FF',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  };

  const infoBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '15px',
    backgroundColor: '#FAFAFA',
    borderRadius: '10px',
    marginTop: '30px',
  };

  const contactInfoTextStyle = {
    color: '#555',
  };

  const infoLabelStyle = {
    fontWeight: '600',
    color: '#4B8DCB',
  };

  return (
    <div style={containerStyle}>
      <div style={innerContentStyle}>
        <div style={avatarContainerStyle}>
          <div style={avatarStyle}>
            <img  style={avatarStyle1}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH0gpvFIk7Q5fDX18FpiHzZZiE5BISTY36Q&s" alt="" />
          </div>
          <div>
            <h2 style={titleTextStyle}>John Doe</h2>
            <p style={subtitleTextStyle}>Lead UX & UI Designer, Canada</p>
          </div>
        </div>

        <p style={{ color: '#444', fontSize: '1em', lineHeight: '1.6' }}>
          I <span style={{ fontWeight: '600', color: '#4B8DCB' }}>design and develop</span> services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores. My passion is to design digital user experiences through bold interfaces and meaningful interactions.
        </p>

        <div style={statsContainerStyle}>
          <div style={statBoxStyle}>
            <h3 style={{ margin: 0, fontSize: '1.5em', color: '#333' }}>500+</h3>
            <p style={{ color: '#777' }}>Happy Clients</p>
          </div>
          <div style={statBoxStyle}>
            <h3 style={{ margin: 0, fontSize: '1.5em', color: '#333' }}>150</h3>
            <p style={{ color: '#777' }}>Projects Completed</p>
          </div>
          <div style={statBoxStyle}>
            <h3 style={{ margin: 0, fontSize: '1.5em', color: '#333' }}>850</h3>
            <p style={{ color: '#777' }}>Photos Taken</p>
          </div>
          <div style={statBoxStyle}>
            <h3 style={{ margin: 0, fontSize: '1.5em', color: '#333' }}>190</h3>
            <p style={{ color: '#777' }}>Calls</p>
          </div>
        </div>

        <div style={infoBoxStyle}>
          <p style={contactInfoTextStyle}>
            <span style={infoLabelStyle}>Birthday:</span> April 4, 1998
          </p>
          <p style={contactInfoTextStyle}>
            <span style={infoLabelStyle}>Email:</span> info@domain.com
          </p>
          <p style={contactInfoTextStyle}>
            <span style={infoLabelStyle}>Phone:</span> 820-885-3321
          </p>
          <p style={contactInfoTextStyle}>
            <span style={infoLabelStyle}>Location:</span> Canada
          </p>
        </div>
      </div>
    </div>
  );
}

// Additional outer container style for full-width background
const outerContainerStyle = {
  backgroundColor: '#E5EFFF',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
};
