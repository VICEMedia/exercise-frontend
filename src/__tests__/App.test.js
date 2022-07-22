import React from "react";
import { shallow, render, mount, screen, history } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './../components/App';
import ShowSelector from './../components/ShowSelector';
import ShowsListItem from './../components/ShowsListItem';
import ShowActivePanel from './../components/ShowActivePanel';
import DataContextProvider from './../contexts/dataContext';
import ResetLink from "./../components/ResetLink";
import ToggleArrowsLink from "./../components/ToggleArrows";
import mockFetch from "./../mocks/mockFetch";
import { createMemoryHistory } from 'history'

const jsdom =  require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = (new JSDOM(``)).window;

global.document = document;
global.window = window;

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_SHOW)
}));   

it('renders correctly', () => {
    const tree = renderer
        .create(<DataContextProvider><ShowSelector /></DataContextProvider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
 
const historyMock = { push: jest.fn() }   
const initialPost = "/?id=a1";

describe('App component', () => {
    

    test('App: render top level container', () => {
      render(<App />);
    });

    test('ShowsListItem: render ShowsListItem', () => { 
        const MOCK_SHOW = {
            "id": "a1",
            "title": "Gaycation",
            "episodes": 24,
            "product_image_url": "/images/gaycation.jpg"
        };
        const tree = shallow(<ShowsListItem content={MOCK_SHOW} />);
        // expect(tree.props().content).toEqual(MOCK_SHOW);
        expect.arrayContaining(MOCK_SHOW);
    });


    test('should render reset button', () => {
        const mockCallBack = jest.fn();
        const reset = shallow(
            <ResetLink onClick={mockCallBack}>
                 Reset
            </ResetLink>
       );
       
       reset.simulate('click');
    //    expect(mockCallBack.mock.calls.length).toBe(0); ??
    });
    

    // test('should render arrow toggle button', () => {
    //     const mockCallBack = jest.fn();
    //     const toggle = shallow(
    //         <DataContextProvider>
    //             <ToggleArrowsLink onClick={mockCallBack}>
    //                 Arrows
    //             </ToggleArrowsLink>
    //         </DataContextProvider>
    //    );
    //     toggle.simulate('click');
    //     // expect(mockCallBack.mock.calls.length).toBe(0); ????
    // });

   
    // something from source to get id of and maybe pass in above
    describe("filter function to work stuff out", () => {
        test("it should filter by a term (title)", () => {
          const shows = [
            { id: "a1", title: "Gaycation", episodes: 24, product_image_url:"/images/gaycation.jpg" },
            { id: "b2", title: "Huang's World", episodes: 12, product_image_url:"/images/huangsworld.jpg" },
            { id: "c3", title: "King of The Road", episodes: 8, product_image_url:"/images/kingoftheroad.jpg" }
          ];
    
          const output = [{ id: "a1", title: "Gaycation", episodes: 24, product_image_url:"/images/gaycation.jpg" },];
          expect(filterShow(shows, "Gaycation")).toEqual(output);
          expect(filterShow(shows, "GAYCATION")).toEqual(output);
      
        });
    });

    function filterShow(inputArr, filterShow) {
        const regex = new RegExp(filterShow, "id");
        return inputArr.filter(function(arrayElement) {
          return arrayElement.title.match(regex);
        });
    }
      
});


