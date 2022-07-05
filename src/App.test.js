import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { testStore } from './Utils/testStore';
import payments from './data/payments';
import orders from './data/orders';
import prices from './data/prices';
import App from './App';

configure({adapter: new Adapter()});
const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />);
    return wrapper;
};

let wrapper;
    beforeEach(() => {
        const initialState = {prices, payments, orders};
        wrapper = setUp(initialState);
    });

describe("Component load",()=>{
    it('App should render without errors', () => {
        const component =  wrapper.find(`[className="App"]`);
        expect(component.length).toBe(1);
    });
})
