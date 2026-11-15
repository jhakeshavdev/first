const users =[
    {
        name:"amisha rathore",
        pic:"https://images.unsplash.com/photo-1788977690417-b9a159d8e2c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio:"silent chaos in a loud world | not for everyone",
    },
    {
        name:"kiara mehta",
        pic: "https://images.unsplash.com/photo-1788961138752-d70e544a8b0f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "main character energy | cofeee > everything",
    },
    {
        name:"isha oberoi",
        pic: "https://images.unsplash.com/photo-1788904641317-a7570ed479a1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        bio: "walking through greams in doc martens | late night thinker",
    },
    {
        name:"ojin oklawa",
        pic:"https://plus.unsplash.com/premium_photo-1769131129643-499043709786?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio:"too glam to  give a damn |filter free soul",
    },
    {
        name:"diya bansal",
        pic:"https://images.unsplash.com/photo-1788804800301-1e3a47b9a495?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio:"a little chaos, a lot of art | just vibes",
    },
    {
        name:"tanay rawat",
        pic:"https://plus.unsplash.com/premium_photo-1788386987011-ae49c927d592?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio:"don't text, just vibe | soft heart, sharp mind",
    }
       
];

function showusers(arr){
    arr.array.forEach(function(users) {
        // create outer card div
        const card=document.createElement("div");
        card.classList.add("card");
    
        // create image
        const img=document.createElement("img");
        img.src="https://plus.unsplash.com/premium_photo-1786994199350-031232f67cd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        img.classList.add("bg-img");

        // create blurred layer div
        const blurredLayer=document.createElement("div");
        blurredLayer.classList.add("blurred-layer");

        // create content div
        const content =document.createElement("div");
        content.classList.add("content");

        // create h3 and paragraph
        const heading=document.createElement("h3");
        heading.textContent="user 123";
    });
}
// saare users show karana
// filter karna har baar input karne pe 
// show karna filtered users