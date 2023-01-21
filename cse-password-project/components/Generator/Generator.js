function runPyScript(input){
    var jqXHR = $.ajax({
        type: "POST",
        url: "/.py",
        async: false,
        data: { param: input }
    });

    return jqXHR.responseText;
}

function generatePlainPassword(wordCount) {
    
    return password
}