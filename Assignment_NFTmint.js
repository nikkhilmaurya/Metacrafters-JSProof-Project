/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTsArray = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
//Here I am taking metadata of Sports NFTs
function mintNFT (name, team, pos, nation, height, date, expiry) {
    const NFT = {
        "playerName" : name,
        "team" : team,
        "position" : pos,
        "nationality" : nation,
        "height" : height,
        "birthdate" : date,
        "contractExpiry" : expiry,
    };
    
    NFTsArray.push(NFT);
    console.log("NFT Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(var i = 0; i < NFTsArray.length; i++){
        console.log("\nNFT ID: \t\t " + (i + 1));
        console.log("Player Name:\t " + NFTsArray[i].playerName);
        console.log("Team: \t\t\t " + NFTsArray[i].team);
        console.log("Position: \t\t " + NFTsArray[i].position);
        console.log("Nationality: \t " + NFTsArray[i].nationality);
        console.log("Height: \t\t " + NFTsArray[i].height);
        console.log("Birthdate: \t\t " + NFTsArray[i].birthdate);
        console.log("Contract Expiry: " + NFTsArray[i].contractExpiry);
        console.log("-----------------------------------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFTsArray.length;
}

// call your functions below this line
//Minting sports NFT with some metadata
mintNFT("Virat Kohli", "RCB", "Batsman", "Indian", "5ft 8in", "05-11-1988", "26-05-2024");
mintNFT("MS Dhoni", "CSK", "Wicketkeeper-Batsman", "Indian", "5ft 9in", "07-07-1981", "26-05-2024");
mintNFT("Rilee Rossouw", "PBKS", "Batsman", "South African", "6ft 0in", "09-10-1989", "26-05-2024");
mintNFT("Pat Cummins", "SRH", "Bowler", "Australian", "6ft 4in", "08-05-1993", "26-05-2024");
mintNFT("Andre Russell", "KKR", "All-Rounder", "West Indian", "6ft 1in", "29-04-1988", "26-05-2024");

//Listing all the minted NFTs
listNFTs();

console.log("Total Suppy of NFTs: " + getTotalSupply());
