import {ScreenBackground, ScreenHeader} from '../../../components/organism';

const ProfileScreen: React.FunctionComponent = () => {
  return (
    <ScreenBackground>
      <ScreenHeader name="Account" bg={'rgba(0,210,0,1)'} />
    </ScreenBackground>
  );
};

export default ProfileScreen;
