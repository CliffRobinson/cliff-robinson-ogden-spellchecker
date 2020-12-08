//Cliff Comment 2: I normally use Enzyme for snapshots, so while 
//the create-react-app default test looks interesting,  I'm going to stick
//with what I know, even if that involves downloading a third-party adapter 
//while the main Enzyme project catches up with latest release of React. 

import enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";


enzyme.configure({
    adapter: new Adapter()
});
