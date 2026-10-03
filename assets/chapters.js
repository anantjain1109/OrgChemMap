// ONE LINE PER CHAPTER. Add a chapter = add a line here + drop its HTML file in chapter/.
// id: unique, no spaces | cls: 11 or 12 | weightage: 1-10, REPLACE with numbers from your books
// links: ids of related chapters (these draw the lines in the 3D graph)
// ready: true only once the HTML file exists in the repo
window.CHAPTERS = [
 {id:"GOC", title:"General Organic Chemistry", cls:11, weightage:9, file:"chapter/class11/GOC.html", links:["Hydrocarbons","Isomerism","Haloalkanes"], ready:true},
 {id:"Isomerism", title:"Isomerism & Stereochemistry", cls:11, weightage:8, file:"chapter/class11/Isomerism.html", links:["GOC","Haloalkanes","Biomolecules"], ready:true},
 {id:"Hydrocarbons", title:"Hydrocarbons", cls:11, weightage:7, file:"chapter/class11/Hydrocarbons.html", links:["GOC","Aromatic","Haloalkanes"], ready:false},
 {id:"Aromatic", title:"Benzene & Aromatic Compounds", cls:11, weightage:7, file:"chapter/class11/Aromatic.html", links:["Hydrocarbons","Amines","Phenols"], ready:false},
 {id:"Purification", title:"Purification & Analysis", cls:11, weightage:5, file:"chapter/class11/Purification.html", links:["GOC"], ready:false},
 {id:"Haloalkanes", title:"Haloalkanes & Haloarenes", cls:12, weightage:8, file:"chapter/class12/Haloalkanes.html", links:["GOC","Isomerism","Hydrocarbons","Phenols","Amines","Carbonyls"], ready:true},
 {id:"Phenols", title:"Alcohols, Phenols & Ethers", cls:12, weightage:8, file:"chapter/class12/Alcohols_Phenols_Ethers.html", links:["Haloalkanes","Carbonyls","Aromatic","Acids"], ready:true},
 {id:"Carbonyls", title:"Aldehydes & Ketones", cls:12, weightage:9, file:"chapter/class12/Carbonyls.html", links:["Phenols","Acids","Amines","Haloalkanes"], ready:true},
 {id:"Acids", title:"Carboxylic Acids & Derivatives", cls:12, weightage:7, file:"chapter/class12/Carboxylic_Acids.html", links:["Carbonyls","Phenols","Amines"], ready:true},
 {id:"Amines", title:"Amines & Diazonium Salts", cls:12, weightage:8, file:"chapter/class12/Amines.html", links:["Haloalkanes","Acids","Aromatic","Carbonyls"], ready:false},
 {id:"Biomolecules", title:"Biomolecules", cls:12, weightage:6, file:"chapter/class12/Biomolecules.html", links:["Isomerism","Carbonyls","Amines"], ready:true},
 {id:"Polymers", title:"Polymers", cls:12, weightage:4, file:"chapter/class12/Polymers.html", links:["Hydrocarbons","Acids","Amines"], ready:true},
 {id:"Everyday", title:"Chemistry in Everyday Life", cls:12, weightage:3, file:"chapter/class12/Everyday.html", links:["Biomolecules","Phenols"], ready:true}
];
