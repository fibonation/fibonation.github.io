import NavigationBar from '../navigation/NavigationBar';

function CorePage({children}) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}

export default CorePage;
