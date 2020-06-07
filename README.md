# Workings

STEPS:

1. Assign the video speed controller parts to variables

2. addEventListener to the controller UI div and listen out for mouse move Y positioning, then run the following function:

3. Get the Y position of the mouse, then assign it to the video speed, the height percentage of the coloured background, and then the displayed number rate.

# Learnings from Wes' solution:

1. To find out the position of Y from the top of an element, do this because it **Makes sure the Y value starts at the top regardless of what is above the element to push it down etc:**
```javascript
const y = e.pageY - this.offsetTop;
```

2. To get a more accurate playback rate, use the following:
```javascript
const y = e.pageY - this.offsetTop;
const percent = y / this.offsetHeight;
const playbackRate = (percent) * (max - min) + min;
```
 