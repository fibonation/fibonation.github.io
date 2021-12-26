import NavigationBar from '../navigation/NavigationBar';
import './CorePage.css';

function CorePage({children}) {
  return (
    <>
      <NavigationBar />
      <div className='smooth-render'>{children}</div>
    </>
  );
}

export default CorePage;
