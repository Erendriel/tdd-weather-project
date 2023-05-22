import WeatherCoordinates from '../WeatherCoordinates';
import {render} from '@testing-library/react-native';

describe('WeatherCoordinates', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCoordinates />);
    wrapper.getByTestId('weather-coordinates');
  });
});
