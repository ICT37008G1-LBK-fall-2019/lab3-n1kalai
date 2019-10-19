
let str = 'საქართველოში გამოაქვეყნეს ,მარკეტინგი რომელიც შეიქმნა ვირუსი  სგან, ეს არის ცუდი ს ბრალი';
document.querySelector('p').textContent = str;
let myArr = ['რეკლამა','ვირუსი','მარკეტინგი']
                for (var i = 0; i < myArr.length; i++) {
                    if(str.indexOf(myArr[i]) != -1) {

                        alert('თქვენ იყენებთ აკრძალულ სიტყვებს: ' +myArr[i]);
                    } else {
                        continue;
                }
            }
        
