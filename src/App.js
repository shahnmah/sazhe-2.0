import 'bootstrap/dist/css/bootstrap.min.css';
import MusicMain from './components/MusicMain/MusicMain';
import Navigator from './components/Navigatior/Navigator';

function App() {
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-2 col-2" style={{borderRight: '1px solid #f1f1f1', height: '100vh'}}>
            <Navigator />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-10 col-10 p-0">
            <MusicMain/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
