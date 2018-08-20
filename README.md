# RPG Currency Charting React Component

Easy Bar-charting React component designed to compare virtual currencies/items.
Uses a "base currency" for comparison, e.g. "Gold" in World of Warcraft, or "Chaos Orbs" in Path of Exile.
The item's worth is scaled between 0-100% to to acquire the Bar's height. 
Uses the highest value item/currency in your data set as 100% and scales other items in comparison. 

## Installation
#### NPM
```npm i rpg-currency-chart```


## How to use it
- Acquire JSON data or request the data from an API. 
- Modify the field names in your data set to match the props of this component (listed below). You will pass your entire dataset as a prop.
- Styling can be modified in the component's BarChart.css file. 

## Props
1. ####**data**  
    A JSON Array of currency objects:
    - name: (String) Item's name
    - worth: (Int) Item worth in number of base currency
    - icon: (String) URL to image of item
    
    ```data={this.state.yourParsedData}```
2. ####**removeBar**
    OnClick function for the Delete button. It should remove the item from the data set, and trigger a re-render of the graph with the new data set. 
    
    ```removeBar={(name) => this.yourDeleteFunction(name)}```

Your Delete Button function in your App.js can look something like this:
    ~~~~
    
    yourDeleteFunction = (itemName) => {
            let newRates = this.state.yourParsedData.slice();
            let removeIndex = newRates.findIndex(item => item.name === itemName);
            newRates.splice(removeIndex, 1);
            for (let item of newRates) {
                item.height = this.scaleRange(item.chaosEquivalent, scaleValue) + '%';
            }
            this.setState({
                currency: newRates,
                scaleValue: scaleValue,
            })
    
        }
## Demo
[Path of Exile Currency Charts]: https://shaneleblanc.github.io/poe-charts-react/