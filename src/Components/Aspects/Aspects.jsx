import React from 'react';
import GD from '../Aspects/GD VIDEO.mp4';
import writing from '../Aspects/writing.mp4';
import seo from '../Aspects/seo.mp4';
import ui from '../Aspects/ui.mp4';

import './Aspects.css';
const Aspects = () => {
  return (
    <div className='aspects'>
    <div className='first'>
      <h1 className='head1'>WE DO</h1>
      <h1 className='head2'>GRAPHIC DESIGNING</h1>
    </div>
    <div className='second'>
    <video className="GD-video" src={GD} loop autoPlay muted></video>
    </div>
    
    {/* second */}
    <div className='first2'>
      <h1 className='head1'>WE DO</h1>
      <h1 className='head2'>CONTENT WRITING</h1>
    </div>
    <div className='second2'>
    <video className="GD-video" src={writing} loop autoPlay muted></video>
    </div>

    {/* third */}
    
    <div className='first'>
      <h1 className='head1'>WE DO</h1>
      <h1 className='head2'>UI/UX DESIGNING</h1>
    </div>
    <div className='second'>
    <video className="GD-video" src={ui} loop autoPlay muted></video>
    </div>

    {/* fourth */}
    <div className='first2'>
      <h1 className='head1'>WE DO</h1>
      <h1 className='head2'>SEARCH ENGINE OPTIMIZATION</h1>
    </div>
    <div className='second2'>
    <video className="GD-video" src={seo} loop autoPlay muted></video>
    </div>

    

      
    </div>
  );
}

export default Aspects;
