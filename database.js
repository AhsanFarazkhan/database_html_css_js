    let data_array=[];
    let data_holder=document.querySelector('.data_holding');
    let data_holder_old=data_holder;
    let store_data=document.querySelector('.store');
    let load_data=document.querySelector('.load');
    let add_button=document.querySelector('.add');

    function store()
    {
    localStorage.setItem('data',JSON.stringify(data_array));
    console.log(localStorage.getItem('data'));
    }
    store_data.addEventListener('click',function(){
        store();
    })

    load_data.addEventListener('click',function(){
        load();
    })
    function load()
    {
        console.log(localStorage.getItem('data'));
        data_array=JSON.parse(localStorage.getItem('data'));
        console.log(data_array);
        render();
    }

    add_button.addEventListener('click',function(){
        console.log("done add");
    let data_name=document.querySelector('.name_d').value;
    let data_item=document.querySelector('.item_d').value;
    let data_date=document.querySelector('.date_d').value;
    let data_price=document.querySelector('.price_d').value;
if(data_date==='' || isNaN(data_price) || data_name==='' || data_item==='')
    {
        alert('invalid or empty data fill again please');
    }
    else{

        let data={
            name: data_name,
            item: data_item,
            date: data_date,
            price: data_price
        }
        data_array.push(data);
        render();
    }
    });

    function delete_button()
    {
                let delete_b=document.querySelectorAll('.delete');

                delete_b.forEach((value,index) => {
                    value.addEventListener('click',function()
                {
                delete_data(index);
                })
                });
    }
    function delete_data(index)
    {
    data_array.splice(index,1);
    render();
    }
    function render(){
    data_holder.innerHTML='';

    data_array.forEach(function(value,index)
    {
        data_holder.innerHTML+=
        `
            <div class="data">
                <div class="name box">${value.name}</div>
                <div class="item box">${value.item}</div>
                <div class="date box">${value.date}</div>
                <div class="price box">${value.price}</div>
                <div><button class="delete">delete</button>
                </div>
            </div>
            `     ;
            delete_button();   
    })

    };
