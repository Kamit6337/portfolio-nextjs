import Qualifications from "./Qualifications";

const PersonalDetails = ({ ...props }) => {
  return (
    <div {...props}>
      <p>Personal Details</p>
      <Qualifications />
    </div>
  );
};

export default PersonalDetails;
