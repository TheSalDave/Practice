var clothingItemsAll = properties.paramlist1.get(0, properties.paramlist1.length());
var seenOutfits = properties.paramlist2.get(0, properties.paramlist2.length());

function groupClothingItemsByType(clothingItems) {
    const categories = {
        'OverTop': [],
        'Jumper': [],
        'Gilet': [],
        'Top': [],
        'Belt': [],
        'Bottom': [],
        'Footwear': []
    };


    clothingItems.forEach(item => {
        const sn = item.get("sn_number");
        const type = item.get("type_option_clothing_type").get("display");
        console.log(sn);
        console.log(type);



        switch (type) {
            case 'OverTop':
                categories.OverTop.push(sn);
                break;
            case 'Jumper':
                categories.Jumper.push(sn);
                break;
            case 'Gilet':
                categories.Gilet.push(sn);
                break;
            case 'Top':
                categories.Top.push(sn);
                break;
            case 'Belt':
                categories.Belt.push(sn);
                break;
            case 'Bottom':
                categories.Bottom.push(sn);
                break;
            case 'Footwear':
                categories.Footwear.push(sn);
                break;
            default:
                break;
        }
    });


    return categories;
}


const groupedItems = groupClothingItemsByType(clothingItemsAll);
console.log(groupedItems);


function suggestRandomOutfit(groupedItems, seenOutfits) {
    const requiredCategories = ['Footwear', 'Bottom', 'Top'];
    const optionalCategories = Object.keys(groupedItems).filter(category => !requiredCategories.includes(category));
    let outfit = [];
    
    // Select one item from each required category
    requiredCategories.forEach(category => {
        const items = groupedItems[category];
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            outfit.push(items[randomIndex]);
        }
    });


    // Select optional items (or not)
    optionalCategories.forEach(category => {
        const items = groupedItems[category];
        if (items.length > 0) { 
            if (Math.random() < 1/items.length) { //option to not include this category aka no item selected
                const randomIndex = Math.floor(Math.random() * items.length);
                outfit.push(items[randomIndex]);
            }
        }
    });


    // Sort and concatenate the outfit
    outfit.sort((a, b) => a - b);
    const outfitString = outfit.map(item => item.toString().padStart(3, '0')).join('');
    
    // Check if the outfit has more than 6 items, rerun if needed
    if (outfit.length > 6 || seenOutfits.includes(outfitString)) {
        return suggestRandomOutfit(groupedItems, seenOutfits);
    }


    return outfitString;
}


const randomOutfit = suggestRandomOutfit(groupedItems, seenOutfits);
console.log(randomOutfit);
console.log(seenOutfits.length);

bubble_fn_outfit_builder(randomOutfit)