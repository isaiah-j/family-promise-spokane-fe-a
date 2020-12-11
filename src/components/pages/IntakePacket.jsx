import React from 'react';
import IdVerification from './IntakePacketContent/BySupervisor/IdVerification';
import ContactInfo from './IntakePacketContent/ByGuests/ContactInfo';
import FamilyMembers from './IntakePacketContent/ByGuests/FamilyMembers';
const IntakePacket = () => {
  return (
    <div className="container">
      <h1>Intake Packet</h1>
      <ContactInfo />
      <FamilyMembers />
      <IdVerification />
    </div>
  );
};

export default IntakePacket;
