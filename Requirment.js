1 /*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class Point 
{
  constructor(coordinateX, coordinateY) 
  {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }
}

class Rectangle 
{
  constructor(startingPoint, width, height) 
  {
    if (!this.checkHeight(height) || !this.checkWidth(width)) 
    {
      throw Error("invalid Width and Height"); 
    }
    else 
    {
      this.startingPoint = startingPoint;
      this.width = width; 
      this.height = height;
    }
  }

  getArea() 
  {
    return this.width * this.width;
  }

  calculatePerimeter() 
  {
    return 2 * this.width + 2 * this.height;
  }
 

  setHeight(height) 
  {
    if (this.checkHeight) 
    {
      this.height = height;
    }
  }

  checkHeight(height) 
  {
    if (height && height > 0) 
    {
      return true;
    }
  }

  checkWidth(width) 
  {
    if (width && width > 0) 
    {
      return true;
    }
  }

  setRectangle({ startingPoint, width, height }) 
  {
    if (!this.checkHeight || !this.checkWidth) 
    {
      throw Error("invalid Width and Height"); 
    }
    else 
    {
      this.startingPoint = startingPoint;
      this.width = width;
      this.height = height;
    }
  }

  getHeight() 
  {
    return this.height;
  }

  printEndPoints() 
  {
    const topRight = this.startingPoint.coordinateX + this.width;
    const bottomLeft = this.startingPoint.coordinateY + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  getWidth() 
  {
    return this.width;
  }
}

function construct_Rectangle(coordinateY, coordinateX , width, height) 
{
  const mainPoint = new Point(coordinateX, coordinateY);
  const rect = new Rectangle(mainPoint, width, height);
  return rect;
}

function constructSquare(coordinateX, coordinateY, squareHeight) {
  let square;
  if (!squareHeight || squareHeight <= 0) 
  {
    throw new Error("invalid square Width and Height"); 
  }
    square = construct_Rectangle(coordinateY, coordinateX , squareHeight, squareHeight) ;
  
  const square_area = square.getArea();
  const squarePerimeter = square.calculatePerimeter();
  console.log("square Area ", square_area);
  console.log("square Perimeter ", squarePerimeter);
  return square;
}




const rectangle = construct_Rectangle(2, 3, 5, 4);
const square = construct_Square(1,1,5);

console.log(square.calculatePerimeter());
square.printEndPoints();
rectangle.setHeight(3);

  
  
