import React from 'react';
import { TodaysMatches, mapDispatchToProps} from './TodaysMatches';
import { shallow } from 'enzyme';
import { setTodaysMatches } from '../../actions';

describe('Leagues', () => {

  // it('should match the snapshot', () => {
  //   const todaysMatches = [{
  //       awayTeamLogo: "https://www.api-football.com/public/teams/2324.png",
  //       awayTeamName: "Universidad de Concepcion",
  //       event_date: "2019-07-27",
  //       fixture_id: 81886,
  //       homeTeamLogo: "https://www.api-football.com/public/teams/2330.png",
  //       homeTeamName: "Coquimbo Unido",
  //       league_id: 303,
  //       statusShort: "FT"
  //     }]
  //   let wrapper = shallow(<Leagues />);
  //   expect(wrapper).toMatchSnapshot();
  // })

  it('should dispatch with a setTodaysMatches action when handleTodaysMatches is called', () => {
    const mockDispatch = jest.fn();
    const mockMatch = [{match: 'match'}];
    const mockAction = setTodaysMatches(mockMatch);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleTodaysMatches(mockMatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

})


