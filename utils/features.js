export const features = (res, message, statusCose,success)=>{
    res
    .status(statusCose)
    .cookie("token","iamin",{
        httpOnly:true,
        maxAge:16*60*1000,

    }).json({
        success,
        message
    });
}

//false cookie return
export const falsereturn = (res,success,message)=>{
    res.json({
        success,
        message
    });
}