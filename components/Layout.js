import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    borderRadius: '4px'
}

const Layout = props => (
    <div style={layoutStyle}>
      <Header />
      {/* {props.content} */}
      {props.children}
    </div>
  );
  
export default Layout;

// const Layout = props => (
    // <div style={layoutStyle}>
    //     <Header />
    // </div>
// )

// const withLayout = Page => {
//     return () => {
//         <div style={layoutStyle}>
//             <Header />
//             <Page />
//         </div>
//     }
// }

// export default withLayout