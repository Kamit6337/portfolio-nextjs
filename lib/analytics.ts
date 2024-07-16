import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(process.env.GA4_MEASUREMENT_ID as string); // Replace with your Measurement ID
};

export const logPageView = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
