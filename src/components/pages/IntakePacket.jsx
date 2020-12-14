import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import IdVerification from './IntakePacketContent/BySupervisor/IdVerification';
import ContactInfo from './IntakePacketContent/ByGuests/ContactInfo';
import FamilyMembers from './IntakePacketContent/ByGuests/FamilyMembers';
import RaceEthnicityInfo from './IntakePacketContent/ByGuests/RaceEthnicityInfo';
import BarriersPage from './IntakePacketContent/ByGuests/BarriersPage';
import ChildSchoolInfo from './IntakePacketContent/ByGuests/ChildSchoolInfo';
import DomesticViolence from './IntakePacketContent/ByGuests/DomesticViolence';
import HomelessHistory from './IntakePacketContent/ByGuests/HomelessHistory';
import Insurance from './IntakePacketContent/ByGuests/Insurance';
const steps = [
  { id: 'ContactInfo' },
  { id: 'FamilyMembers' },
  { id: 'RaceEthnicityInfo' },
  { id: 'BarriersPage' },
  { id: 'ChildSchoolInfo' },
  { id: 'IdVerification' },
  { id: 'DomesticViolence' },
  { id: 'HomelessHistory' },
  { id: 'Insurance' },
];
const IntakePacket = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const props = { navigation };
  switch (id) {
    case 'ContactInfo':
      return <ContactInfo {...props} />;
    case 'FamilyMembers':
      return <FamilyMembers {...props} />;
    case 'RaceEthnicityInfo':
      return <RaceEthnicityInfo {...props} />;
    case 'BarriersPage':
      return <BarriersPage {...props} />;
    case 'ChildSchoolInfo':
      return <ChildSchoolInfo {...props} />;
    case 'IdVerification':
      return <x {...props} />;
    case 'DomesticViolence':
      return <DomesticViolence {...props} />;
    case 'HomelessHistory':
      return <HomelessHistory {...props} />;
    case 'Insurance':
      return <Insurance {...props} />;
    default:
      return null;
  }
};

export default IntakePacket;
