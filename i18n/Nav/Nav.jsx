import React from 'react';
import { withTranslation } from 'react-i18next';

class Nav extends React.Component { 
constructor() {
  super();
  
}
state={
  users : [],
  data:[1,2,3,4,5,6,7,8],
  dats:true
}
componentDidMount=()=> {

  
}


  render () {
    const { t ,i18n} = this.props;
  const  change=(lang)=>{
      i18n.changeLanguage(lang)
    }
    return (
      <div className="NavWrapper">
      nav nav         <h1>{t('title')}</h1>

      <div>
        
      <button onClick={() => change('ar')}>de</button>
        <button onClick={() => change('en')}>en</button>
      {this.state.dats?(<div>true</div>):(<div>false</div>)}

      </div>
      <div>
        {this.props.children}
      </div>
<footer>
  footer
</footer>
      </div>
    );
  }
}

export default withTranslation()(Nav);
