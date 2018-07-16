var Grid = require('dynamicgrid');
var grid = new Grid(20000, 20000, {w: 400, h: 400}); // Segment is {w : w, h : h}
var item = grid.createItem(110, 110); // Returns Item

// export default (io, socket) => {

// 	socket.on('player move', (player) => {
// 		item.update(player.x, player.y) // Defaults to current x and y
// 		io.emit('player move', item.plain());
// 	});
// }
 export default class start{
 	
 }
 
// Update items position
 
// Listen when items show up in segment
// item.segment.on('update', cb);
 
// Listen to item changing segment
// item.on('segment change', cb);
 
// Get plain object to pass to client 
// item.plain();
 
// Destroy item
// item.destroy();
 
// Check if x and y are within range of item
// item.withinRange(x, y);
 
// Listen to segment group
// item.listenToSegmentGroup(cb);
 
// Listen to destroyed items
// grid.on('destroyed item', cb); // Gets passed item
 
// Listen to all segment changes in grid
// grid.on('update', cb);
 
// With socket.io
// io.emit('item', item.plain());
 
// Get all other items in segment 
// item.getOtherItemsInSegment(true); // True passes as param returns all of the other items plain object
                                      // otherwise you get the full item
 
// Get items in surrounding segments
// item.getItemsInSurroundingSegments(true); // True gets items in plain object