import React from 'react'
import "../assets/countryDb/flagIcons/css/flag-icons.min.css"
const countryName = require('../assets/countryDb/countryName/countryName.json')
const countryFlag = require('../assets/countryDb/flagIcons/countryFlag.json')
import "./countryCp.css"

export default class CountryCp extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.inputValue == nextState ? false : true;
    }
  
    // 生成符合搜索要求的数组
    createCountryData(key){
        if (!key) return []
        let data = [];
        for (let i = 0; i < countryName.length; i++) {
            if (this.matchCountry(countryName[i].country,key)) {
                data.push(countryName[i]);
            }
            if (data.length > 8) return data;
        }
        return data;
    }

    // 匹配条件
    // 1.包含或等于输入字符串
    // 2.大小写不敏感
    matchCountry(name,key){
        let tag = this.bedeckString(name).indexOf(this.bedeckString(key));
        return tag == -1 ? false : true;
    }

    // 大写转小写 去空格
    bedeckString(str){
        return str.toLowerCase().replace(/\s*/g,"");
    }

    // 获取对应国家的对应code
    getCountryCode(name){
       let o = countryFlag.find(v => v.name == name);
       // 好似缺少国旗，用中国代替了
       return o ? o.code :'cn';  
    }

    render(){
        this.state = this.props.inputValue;
        const listItems = this.state ? this.createCountryData(this.state).map((v) => {
            return <li key={v.country}>
                {/* <span class="fi fi-gr fis">Greece</span>
                4:3 fi fi-cn
                4:1 fi fi-cn fis */}
                <span className={"fi"+" "+"fi-"+`${this.getCountryCode(v.country)}`}></span>
                <p>{v.country}</p>  
            </li>
        }) : <div className='tip'> no Result</div>;
        return (
            <div className='countryLay'>
              <ul>{listItems}</ul>
            </div>
        )
    }
}