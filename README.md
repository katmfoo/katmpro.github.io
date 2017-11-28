# Airport System Project

Airport system project for Dr. Hristescu's Data Structures and Algorithms class.

## Group members

* Patrick Richeal
* Nikhil Shah

## Classes and ADTs

#### Plane class (completed)
The functionality of this class should be to simply store the information about a specific planes flight and provide operations to access that data.

Data fields
* String for flight number
* String destination

#### Runway class (completed)
The functionality of this class should be to store the ADTs necessary to store the queue of waiting planes to take off and the list of planes that are waiting for clearance to re enter a specific runway. It should also provide operations for retrieving, adding, and removing plane objects from those respective ADTs.

Data fields
* Queue<Plane> for planes waiting to take off on this runway
    * Queue because the planes that have been waiting the longest should be processed first
* List<Plane> for planes who are waiting for clearance to re enter the runway
    * List because you have to specify the plane by flight number to allow it to re enter the runway, meaning we need access to every item in the list for iteration
* String to store the name of the runway

#### Airport class (completed)
The functionality of this class should be to store the list of runways that are active for a single airport. In addition, it also stores other random bits of information about the airport like the number of planes that have taken off or the last attempted take off runway index. This class should also provide operations for retrieving, adding, and removing runways from the airport.

Data fields
* List<Runway> for runways that this airport has
    * List because we need to store the runways in order and iterate over them over time.
* Integer to store the index of the runway that a take off was last attempted on so we can attempt take offs in a round robin manner
* Integer to store number of planes that have successfully taken off

## Program flow

* Start of program, user enters number of runways and names each of them, the list of that many runways is initialized properly in the order they were inserted (enforce unique runway names) (**completed**)
* Repetively ask the user for menu options until they quit (**completed**)

## Menu options

1. Plane enters the system (**completed**)
    * User enters flight number
    * User enters destination
    * User enters runway
    * Search list of runways for a runway with the correct name, otherwise ask for runway again
    * Create Plane object with inputted data and add to the correct Queue on the runway
2. Plane takes off (**completed**)
    * Beginning with the first runway that was entered, pick the plane first in line in the queue of planes waiting for takeoff (if none, advance to next runway). upon a plane successfully taking off on a runway, the next attempt at letting a plane take off should try from the next runway in order (persistent round robin)
    * Once a flight is found, the user will be prompted if the flight is cleared for take off (Y/N)
    * If no, then the plane gets dequeued and added to the list of planes who are waiting for clearance to re enter the runway for the same runway it was on
    * If yes, the plane is dequeued and successfully takes off
3. Plane is allowed to re enter a runway
    * Check if there are any planes on any runways waiting for clearance to re enter
    * If there are, prompt the user for a flight number
    * Check if there is a plane with that flight number waiting for clearance to re enter on any runway, if not, re prompt
    * When the flight is found successfully, remove it from the list and add it to the queue of the same runway
4. Runway opens (**completed**)
    * Prompt user for the name of the new runway
    * Check if already exists, if it does, re prompt them
    * Otherwise, add it to the end of the list of runways
5. Runway closes (**completed**)
    * Prompt user for the name of the runway to close
    * If not found, ask again
    * Once runway is found successfully, dequeue the runways queue until it's empty, asking for each one what runway the plane should go to
    * If they enter a runway name that doesn’t exist, let them know and re ask
    * If they enter a runway name that is the current one that is closing, let them know and re ask
    * The plane should be added to the queue of the new runway, not the list
    * Do the same thing for the list of planes waiting for clearance on the to be deleted runway, adding them to the new runways queue
    * Remove the empty runway from the list of runways
6. Display info about planes waiting to take off
    * For each runway, show each plane that is waiting in the queue
7. Display info about planes waiting to be allowed to re enter a runway (**completed**)
    * For each runway, show each plane that is waiting in the list
8. Display number of planes who have taken off
    * Keep a global counter of the number of planes that have taken off
9. End the program (**completed**)

## Who’s working on what

Patrick Richeal
* Queue ADT (**completed**)
* Runway class (**completed**)
* Airport class (**completed**)
* Menu options
    * Plane enters the system (1) (**completed**)
    * Plane takes off (2) (**completed**)
    * Runway closes (5) (**completed**)
    * Display info about planes waiting to be allowed to re enter a runway (7) (**completed**)

Nikhil Shah
* List ADT (**completed**)
* Plane class (**completed**)
* Menu options
    * Plane is allowed to re enter a runway (3)
    * Runway opens (4) (**completed**)
    * Display info about planes waiting to take off (6)
    * Display number of planes who have taken off (8)
