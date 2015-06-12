define(['React'], function(React) {
  var TimeMessage = React.createClass({
    render: function() {
      var elapsed = Math.round(this.props.elapsed  / 100);
      var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
      return <p>React has been successfully running for {seconds} seconds.</p>;
    }
  });

  var Timer = React.createClass({
    getInitialState: function() {
      return {now: new Date()};
    },

    componentDidMount: function() {
      var that = this;
      setInterval(function() {
        that.setState({now: new Date()});
      }, 50);
    },

    render: function() {
      var elapsed = this.state.now.getTime() - this.props.start.getTime();
      return <TimeMessage elapsed={elapsed} />;
    }
  });

  return Timer;
});