var tools = {

    add: (x,y)=>{
        return x+y;
    },
    sayHello: () => {
        return 'hello nodejs from tools';
    }
};

//exports.tools = tools; // assign the tools to outer tools
//inside the commonjs01, tools.tools.add(2,3)

module.exports = tools;// tools.add(2,3)
