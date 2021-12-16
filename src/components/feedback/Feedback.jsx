const Feedback = ({ children }) => {
  /* static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static propTypes = {}; */

  return (
    <div>
      <h1>Please leave feedback</h1>
      {children}
    </div>
  );
};
export default Feedback;
