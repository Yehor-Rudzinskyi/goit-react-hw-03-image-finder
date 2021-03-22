import Loader from 'react-loader-spinner';
const Loading = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
      style={{ textAlign: 'center' }}
    />
  );
};

export default Loading;
