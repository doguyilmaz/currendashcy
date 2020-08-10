const appTheme = localStorage.getItem('theme');

// const theme = 'dark';
// const theme = 'light';

export const lightTheme = appTheme === 'light';

export const color = lightTheme ? 'white' : 'black';
export const color2 = lightTheme ? 'white' : '#010e2c';
export const color3 = lightTheme ? '#09f010' : '#42ff3a';

if (lightTheme) {
	document.body.style.background = '#e1eaee';
	document.body.style.color = '#061a44';
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${
	lightTheme ? 'white' : 'black'
}`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
	lightTheme ? '#a9b6ff' : '#2f3242'
}`;

// 41465e
// 2f3242
export const wheatBoxShadow = `box-shadow: 0px 0px 4px 2px ${
	lightTheme ? 'gray' : 'wheat'
}`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const fontF = "font-family: 'Recursive', sans-serif";

export const textAlignCenter = 'text-align: center;';

export const reddish = lightTheme ? 'red' : 'darkred';
export const greeny = lightTheme ? 'lightgreen' : 'darkgreen';
export const gray = lightTheme ? 'lightblue' : 'gray';
export const lightgray = lightTheme ? 'lightgray' : 'lightgray';
export const blue = lightTheme ? 'green' : 'lightblue';
export const mainTone = lightTheme ? 'black' : 'wheat';
export const selectBg = lightTheme ? 'white' : 'black';
export const shadow = lightTheme ? 'blue' : 'yellow';
