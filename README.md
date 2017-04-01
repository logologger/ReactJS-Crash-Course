<h1>React JS</h1>
<h3>Advantages of React</h3>
<li>
	<ol>Simple Declarative Views for each state in your application</ol>
	<ol>Encapsulated components</ol>
	<ol>Dynamic Properties and state</ol>
	<ol>Virtual Dom</ol>
	<ol>completely independent of the rest of your application</ol>
	<ol>Can render on client or server</ol>
</li>

<h3>Virtual DOM</h3>
<p>React abstracts away the DOM and creates it own version which is simplified and only includ 
the things you need</p>

```javascript
	class HelloMessage extends React.Component {
	render(){
	return <div>Hello {this.props.name}</div>;
	}
	}

	ReactDom.render(<HelloMessage name="Rajat"/>,mountNode);

```