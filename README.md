# Team Blue Milk Presents: Death Star!

## View the complete project here:

[live demo.](https://gu-computer-graphics-25.github.io/team-projects-blue-milk/)

## Project Summary:

The link above showcases our completed project scene for CPSC 425, a technical showcase of our progress in understanding the core components of ThreeJ's graphical capabilities.
Our scene depicts a fictional scene ripped straight from the hit franchise Star Wars, in which the titulat Death Star, a large space station capable of firing lasers, is seen attacking the small desert city of
Mos Eisley on the planet Tatooine.

To emulate this fictional scene, we built our project around three main components:
  - A large grey sphere, which serves as the Death Star.
  - A collection of various boxes, placed against a backdrop of two orbiting spheres and a large plain that acts as our city and planet landscape.
  - And a green cylinder ( which can be toggled ), that connects the Death Star to Mos Eisley in a bright beam of destruction.

Our scene is also fully interactible! A control scheme has been implemented to allow users to pilot the Death Star themselves, while a GUI toggle will lt you select your own color of choice for the laserbeam of doom. Its fun for the whole family!

## Features Demonstrated:

Our project scene features the following features:

1. Hierarchical modeling:
   - Our scene features several compound objects, particularily the Death Star, city, and laserbeam, which all feature nested meshes.
   - In addition to these objects, our scene also features three extra spheres used for tracking light sources ( the red and yellow orbiting spheres are the suns, while the third covers the laserbeam's explosion ), and an extra plane for the desert floor.
  
2. Materials and lighting:
   - All objects in our scene sport a meshPhongMateriaL, while our light sources and special effects have extra properties including emissive intensity and reflectivity.
   - The city of tatooine has been mapped to support shadows casted by the twin suns as well.

3. Dynamic camera angles:
   - Our scene can be viewed from three distinct camera angles:
     - Key “0”: A Suspended default view of Mos Eisley, AKA: default view
     - Key “1”: Tatooine looking at the Death Star, AKA: ground view
     - Key “2”: The Death Star looking at the City, AKA: birds eye view

4. transparency:
   - Both the suns and laserbeam in our scene have transparent properties, which enhance the plasma-like nature of both objects.

user interaction
etc.
animation
etc.
Some other feature - some other description/summary
Resources Used and/or Referenced
