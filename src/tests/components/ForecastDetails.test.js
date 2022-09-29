import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    temperature: {
      min: 4,
      max: 11,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Date: Mon Apr 30 2018")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText("Min Temp: 4°c")).toHaveAttribute(
      "class",
      "forecast-details__minTemperature"
    );
    expect(getByText("Max Temp: 11°c")).toHaveAttribute(
      "class",
      "forecast-details__maxTemperature"
    );
    expect(getByText("Wind Speed: 13mph")).toHaveAttribute(
      "class",
      "forecast-details__windSpeed"
    );
    expect(getByText("Wind Direction: s")).toHaveAttribute(
      "class",
      "forecast-details__windDirection"
    );
    expect(getByText("Humidity: 30%")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
  });
});
