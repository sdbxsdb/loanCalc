module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        '3xl': '1600px',
        'heroBreak1': '1065px',
        'heroBreak2': '967px',
        'navBreak1': '1327px',

      },     
       
      fontSize: {
          'largeTitle': '5rem',       //  80px   - h1 Homepage
          'subTitle': '1.25rem',       //  20px
          'smallTitle': '0.75rem',       //  12px
          'mobileNav': '0.875rem',       //  14px
          'mobileHeaderTitle': '2.5rem',       //  40px
          'mobileTitle': '1.875rem',       //  30px
          'footerNav': '1.625rem',       //  26px
          '9xl': '8.75rem',         //  140px   - Titles
          '7xl': '5rem',            //  80px    - Menu / Titles
          '5xl': '3rem',            //  
          '4xl': '2.875rem',          //  46px    - CTA Title
          '2xxl': '1.5rem',         //  24px    - Script content
          '2xl': '1.375rem',        //  22px    - Script content
          '1xs': '1rem',            // 16px
          'xxs': '0.75rem',       //  12px    - Small text
          'xxxs': '0.5625rem',      //  9px     - Extra Small text

          
      },        
      
        scale: {
          '38': '.38',
          '40': '.4',
          
        },
    
      lineHeight: {   
        '88': '5.5rem',               // 80px
        'squat': '0.9rem',            // 14.4px
        '110': '6.875rem',             // 110px
        'largeTitle': '3.438rem',            // 55px
        'infoSubtitle': '1.75rem',       // 28px
        '36': '2.25rem',              // 52px
        '52': '3.263rem',              // 52px
        '28': '7rem',                 // 112px 
        '19': '4.875rem',             // 78px 
        '16': '4rem',                 // 64px 
        '13': '3.25rem',              // 52px 
      },

      letterSpacing: {                
        widest: '.2em',
        widestBtn: '.16em',
       },

       borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
      },

    
  
      colors: {
        primary:'#123757',            // dark blue
        lightBlue:'#006C98',            // light blue
        darkestBlue:'#0A2740',            // darkest blue
        secondary:'#F77806',            // orange
        fadedgray:'#879fb0',            // light grey
        mediumgray:'#F3F6F8',            // medium grey
        darkergray:'#6d7d8c',            // dark grey
        anothergray:'#e7ecef',            // dark grey
        offWhite:'#e9edf1',            // off white

      },        
     
        spacing: {
          '1.25': '0.3125rem',      //5px          
          '2.5': '0.625rem',        //10px 
          '2.75': '0.6875rem',    	//11px 
          '3.75': '0.9375rem',     	//15px
          '5.25': '1.3125rem',    	//21px           
          '7.5': '1.875rem',        //30px       
          '12.5': '3.125rem',       //50px
          '13.5': '3.375rem',       //54px
          '15': '3.75rem',          //60px 
          '15.5': '3.875rem',       //62px           
          '17.5': '4.375rem',       //70px 
          '22.5': '5.625rem',       //90px 
          '25': '6.25rem',          //100px  
          '33.75': '8.4375rem',     //135px 
          '30': '7.5rem',           //120px
          '50': '12.5rem',          //200px 
          '78': '19.5rem',          //312px 
          '95': '23.75rem',         //380px 
          '200': '50rem',           //800px    

          
        },
     
        maxWidth: {
            
         }
      },

      
      
     
      fontFamily: {             
        'acumin': ['acumin-pro, sans-serif'],
      },    

      order: {
        first: '-9999',
        last: '9999',
       none: '0',
       normal: '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
       '7': '7',
       '8': '8',
       '9': '9',
       '10': '10',
       '11': '11',
       '12': '12',
      },

      
  },
  plugins: [],
}
