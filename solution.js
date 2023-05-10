function justify(text, width) 
{
  text = text.split(' ');
  let res = [];
  let buff = [];
  
  let len = text.length;
  
  let cap = 0;
  for(let i = 0; i < len; i++)
  {
  	let word = text[i];
    let lw = word.length;
    cap += lw;
    if(cap > width)
    {
    	--i;
      	buff.pop();
      	--cap;
      	let spaces = width - (cap - lw);
      
      	let k = 0;
        let j = 0;
        let found = false;
        let p = 0;
      	while(spaces > 0)
      	{

          if(buff[k][0] == ' ')
            buff[k] += ' ', --spaces, found = true;
          k++;
          k = k % buff.length;
          ++p;
          if(p > buff.length && !found)
            break;
        }
      
        res.push(buff);
      
        buff = [];
        cap = 0;
    }
    else
    {
    	buff.push(word);
      	buff.push(' ');
      	++cap;
    }   
  }
  if(buff.length)
    res.push(buff);
  let final = res.map(k => k.join('')).join('\n').trim();
  return final
  
}
