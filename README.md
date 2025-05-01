# Team Blue Milk Presents: Death Star!

## View the complete project here:

[live demo](https://gu-computer-graphics-25.github.io/team-projects-blue-milk/)

## Project Summary:

The link above showcases our completed project scene for CPSC 425, a technical showcase of our progress in understanding the core components of ThreeJ's graphical capabilities.
Our scene depicts a fictional scene ripped straight from the hit franchise *Star Wars*, in which the titulat Death Star, a large space station capable of firing lasers, is seen attacking the small desert city of
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

5. user interaction and controls:
   - Our scene has mapped the following keys to specific actions:
     - Pressing __w__,__a__,__s__, and __d__ will move the Death Star.
     - Pressing __f__ will fire the Death Star's main laser.
     - Pressing __0,1__, and __2__ will switch the camera angle.
     - Pressing __r__ will reset the Death Star firing animation.
   - In addition to these controls. a gui has been added so that users may change the color of the laserbeam as they see fit* ( *colors are limited to 6. This battle station is NOT fully armed and operational )

6. Animated elements:
   - To enhance our lighting effects, the suns of Tatooine have been made to orbit the scene at seperate angles and speeds.
   - The Death Star's main laser is animated in a three-part sequence:
     - Charging the cannon with 8 conjoining lasers
     - Firing the main laser
     - Enveloping Mos Eisley in a firey ball of doom

7. Texturing:
   - Lastly, to really bring the whole project together, all of our buildings and the Death Star were given an extra layer of texturing, all of which were lovingly hand-crafted by our own team.

## Resources Used and/or Referenced:

The following sources and sites were referenced or adapted from in some way to help build out final scene:

- Our project was built from a basic boiler-plate template HTML file, provided by VSCode. This can be best observed at the top of our Index.HTML file in the scripting setup:

- While additional inspiration was drawn from course lecture notes and participation examples distributed in class, no major sections of code were directly copied. Files of particular use were:

  [The helper functions from quiz 8: Animated Wedge Car](https://canvas.gonzaga.edu/courses/19968/assignments/195588?module_item_id=845874)

  [The code used for rotating inside nested objects from IA2 - The Clown](https://canvas.gonzaga.edu/courses/19968/assignments/195553?module_item_id=845862)

- The ThreeJs online handbook was consulted extensively for assistance in researching all aspects of the project, especially parameters for objects.

  [Link to the ThreeJs website and database](https://threejs.org/)

- The addFaceCoordinates function was pulled directly from the texture mapping quiz 7 on Canvas. See code lines 59 to 65 in Utils.js.

  [Link to the quiz](https://canvas.gonzaga.edu/courses/19968/assignments/195584?module_item_id=845873)


