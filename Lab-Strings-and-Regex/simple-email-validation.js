        function validateSimpleEmail(email) {
            let matches = String(email).match(/\b([a-zA-Z0-9]+)@([a-z]+)\.([a-z]+)\b/g)
            if (matches && matches.length !== 0) {
                console.log('Valid')
            } else {
                console.log('Invalid')
            }
        }