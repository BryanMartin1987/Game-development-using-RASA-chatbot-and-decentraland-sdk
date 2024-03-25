declare function setTimeout(callback: (...args: any[]) => void, ms: number): any;

const _scene = new Entity('_scene')
engine.addEntity(_scene)

const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

const decentraland = new Entity('decentraland')
engine.addEntity(decentraland)
decentraland.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(32, 0.5319271087646484, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.055347442626953125, 0.055347442626953125, 0.055347442626953125)
})
decentraland.addComponentOrReplace(transform18)
const gltfShape2 = new GLTFShape("315cd251-7a6f-4121-90d6-7feabefa6854/Decentraland.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
decentraland.addComponentOrReplace(gltfShape2)

const jacketGirl = new Entity('jacketGirl')
engine.addEntity(jacketGirl)
jacketGirl.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(34.50403594970703, 0.525507926940918, 26.74717903137207),
  rotation: new Quaternion(-1.0406950530687263e-16, 0.17099952697753906, -2.0384728571798405e-8, -0.985271155834198),
  scale: new Vector3(1.2, 1.2, 1.2)
})
jacketGirl.addComponentOrReplace(transform19)
const gltfShape3 = new GLTFShape("dd4da704-249c-48ba-907e-f70f76d83ee1/girlnew.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
jacketGirl.addComponentOrReplace(gltfShape3)

// UI Canvas and container for displaying responses
let canvas = new UICanvas();
const container = new UIContainerRect(canvas);
const myText = new UIText(container);
container.visible = false;

// Function to send messages from jacketGirl to its Rasa server
function send_message_jacketGirl(user_message){
    let urlJacketGirl = "http://localhost:5006/webhooks/rest/webhook"; // Replace with jacketGirl's Rasa server URL
    let myBody = {
      sender: "User",
      message: user_message,
    };

    fetch(urlJacketGirl, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(myBody),
    })
    .then((data) => {
      if (data.ok) {
        return data.json();
      } else {
        throw new Error("Failed to fetch data");
      }
    })
    .then((jsonResponse) => {
      if (
        Array.isArray(jsonResponse) &&
        jsonResponse.length > 0 &&
        jsonResponse[0].text
      ) {
        let  response_message = jsonResponse[0].text;

        let result = '';
        let total_lines = 0;
        for (let i = 0; i < response_message.length; i += 135) {
          total_lines += 1;
          result += response_message.substr(i, 135) + '\n';
        }

        response_message = result
        container.visible = true;
        container.vAlign = "bottom";
        container.hAlign = "center";
        container.width = "90%";
        let height = 25 * total_lines;
        container.height = height.toString() + "px";
        container.color = Color4.White();

        myText.value = "DulcineIA:--> " + response_message;
        myText.font = new Font(Fonts.SansSerif_Bold);
        myText.fontSize = 20;
        myText.hAlign = "left";
        myText.vAlign = "bottom";

        myText.color = Color4.Black();
        myText.isPointerBlocker = false; // Allow interaction with underlying elements
        
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}

// Interaction logic for jacketGirl
jacketGirl.addComponent(
  new OnClick(() => {
    container.visible = false;
    const canvasinput = new UICanvas()
    
    const textInput = new UIInputText(canvasinput)
    
    if (textInput.visible == false){
      textInput.visible = true
    }
    else{
      textInput.width = "80%"
      textInput.height = "25px"
      textInput.vAlign = "bottom"
      textInput.vTextAlign = "bottom"
      textInput.hAlign = "center"
      textInput.fontSize = 20
      textInput.placeholder = "Escribe aquí tu consulta..."
      textInput.isPointerBlocker = true
      textInput.visible = true
    }
    textInput.onTextSubmit = new OnTextSubmit((x) => {
      send_message_jacketGirl(x.text)
      textInput.visible = false
    })
  })
);

// Create a button entity
const linkButton = new Entity('linkButton');
engine.addEntity(linkButton);
linkButton.setParent(_scene);
const transformLinkButton = new Transform({
  position: new Vector3(10, 0, 10), // Adjust position as needed
  rotation: Quaternion.Euler(0, 0, 0), // Set rotation if needed
  scale: new Vector3(2, 1, 1), // Adjust scale as needed
});
linkButton.addComponentOrReplace(transformLinkButton);
const linkButtonShape = new BoxShape();
linkButton.addComponentOrReplace(linkButtonShape);
const linkMaterial = new Material();
linkMaterial.albedoColor = Color3.Blue(); // Set button color
linkButton.addComponentOrReplace(linkMaterial);

// Add click handler to the button entity
linkButton.addComponent(
  new OnClick(() => {
    // Open the desired link in the user's browser
    openExternalURL("https://example.com");
  })
);

const myCustomEntity = new Entity()
myCustomEntity.addComponent(new BoxShape())
const transformLink = new Transform({ position: new Vector3(4, 0, 4) })
myCustomEntity.addComponent(transformLink)
myCustomEntity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://docs.decentraland.org")
  })
)
engine.addEntity(myCustomEntity)


const boy = new Entity('boy')
engine.addEntity(boy)
boy.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(29.348119735717773, 0.5357363224029541, 35.5085334777832),
  rotation: new Quaternion(-3.0528475611319794e-16, -0.45175689458847046, 5.38536077954177e-8, -0.8921411037445068),
  scale: new Vector3(1.1 , 1.1 , 1.1 )
})
boy.addComponentOrReplace(transform20)
const gltfShape4 = new GLTFShape("b52b9559-d38c-4731-af84-b75e6e83a5e2/girlnew.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
boy.addComponentOrReplace(gltfShape4)

// Function to send messages from boy to its Rasa server
function send_message_boy(user_message){
    let urlBoy = "http://localhost:5005/webhooks/rest/webhook"; // Replace with boy's Rasa server URL
    let myBody = {
      sender: "User",
      message: user_message,
    };

    fetch(urlBoy, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(myBody),
    })
    .then((data) => {
      if (data.ok) {
        return data.json();
      } else {
        throw new Error("Failed to fetch data");
      }
    })
    .then((jsonResponse) => {
      if (
        Array.isArray(jsonResponse) &&
        jsonResponse.length > 0 &&
        jsonResponse[0].text
      ) {
        let  response_message = jsonResponse[0].text;

        let result = '';
        let total_lines = 0;
        for (let i = 0; i < response_message.length; i += 135) {
          total_lines += 1;
          result += response_message.substr(i, 135) + '\n';
        }

        response_message = result
        container.visible = true;
        container.vAlign = "bottom";
        container.hAlign = "center";
        container.width = "90%";
        let height = 25 * total_lines;
        container.height = height.toString() + "px";
        container.color = Color4.White();

        myText.value = "Plácido:--> " + response_message;
        myText.font = new Font(Fonts.SansSerif_Bold);
        myText.fontSize = 20;
        myText.hAlign = "left";
        myText.vAlign = "bottom";

        myText.color = Color4.Black();
        myText.isPointerBlocker = false; // Allow interaction with underlying elements
          // Replace the GLTFShape of the boy entity
          const newModelShape = new GLTFShape("b52b9559-d38c-4731-af84-b75e6e83a5e2/BoyNew1.glb");
          boy.addComponentOrReplace(newModelShape);
        
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}
let chatInput: UIInputText;


// Define the distance threshold for triggering the chat input
const triggerDistance = 3; // Adjust this distance as needed

// Function to check distance between two positions
function distance(pos1, pos2) {
    return Math.sqrt(
        Math.pow(pos1.x - pos2.x, 2) +
        Math.pow(pos1.y - pos2.y, 2) +
        Math.pow(pos1.z - pos2.z, 2)
    );
}

// Function to constantly check player's distance to the boy entity and trigger chat input if within range
function checkProximity() {
    // Get player's position
    const playerPosition = Camera.instance.position;

    // Get boy entity's position
    const boyPosition = boy.getComponent(Transform).position;

    // Calculate distance between player and boy entity
    const dist = distance(playerPosition, boyPosition);

    // If player is within trigger distance, open chat input
    if (dist <= triggerDistance) {
        openChatInput();
    }

    // Schedule the next check
    setTimeout(checkProximity, 1000); // You can adjust the frequency of distance checks here
}

// Call the proximity check function to start checking distance
checkProximity();

// Function to open the chat input
function openChatInput() {
    // Hide any existing chat container
    container.visible = false;

    // Create a new UI canvas for chat input if not already created
    if (!chatInput) {
        const canvas = new UICanvas();

        chatInput = new UIInputText(canvas);
        chatInput.width = "80%";
        chatInput.height = "25px";
        chatInput.vAlign = "bottom";
        chatInput.vTextAlign = "bottom";
        chatInput.hAlign = "center";
        chatInput.fontSize = 20;
        chatInput.placeholder = "Type your message here...";
        chatInput.isPointerBlocker = true;
        chatInput.visible = true;

        // Submit handler for chat input
        chatInput.onTextSubmit = new OnTextSubmit((text) => {
            send_message_boy(text.text);
            const newModelShape = new GLTFShape("b52b9559-d38c-4731-af84-b75e6e83a5e2/BoyNew1.glb");
            boy.addComponentOrReplace(newModelShape);
            setTimeout(revertToOriginalModel, 13000);
            chatInput.visible = false;
        });
    } else {
        // Show chat input if already created
        chatInput.visible = true;
    }
};

// Function to revert to original model after chat input is closed
function revertToOriginalModel() {
    const originalModelShape = new GLTFShape("b52b9559-d38c-4731-af84-b75e6e83a5e2/girlnew.glb");
    boy.addComponentOrReplace(originalModelShape);
};