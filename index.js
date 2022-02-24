const express = require("express");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello world"));


app.get("/result", (req, res) => {
    res.send( {
        "id": "92fb33a2-ef33-4da7-b1b0-fe5332627144",
        "data": {
            "id": "90b64253-6e83-4b30-9e10-7cd2cb1e14ee",
            "app": {
                "id": "b8f739ef-efb2-47e3-9d52-5d5a78577176",
                "name": "pery-capstone"
            },
            "slug": {
                "id": "5629e560-8027-4523-a159-d130894dec87",
                "commit": "9ee51e07d99930a7d826af234e376877afef52f7",
                "commit_description": ""
            },
            "user": {
                "id": "4cfaa5a9-456b-48a8-b807-3ec89c846433",
                "email": "thercpery@gmail.com"
            },
            "stack": "heroku-20",
            "status": "succeeded",
            "release": {
                "id": "58629908-3b8d-4ca3-9fc6-9ce657c0df5e",
                "version": 18
            },
            "metadata": {},
            "buildpacks": [
                {
                    "url": "https://buildpack-registry.s3.amazonaws.com/buildpacks/heroku/nodejs.tgz"
                }
            ],
            "created_at": "2022-02-24T12:59:06Z",
            "updated_at": "2022-02-24T12:59:23Z",
            "source_blob": {
                "url": "https://codeload.github.com/thercpery/webhooks-capstone-pery/legacy.tar.gz/9ee51e07d99930a7d826af234e376877afef52f7",
                "version": "9ee51e07d99930a7d826af234e376877afef52f7",
                "checksum": null
            },
            "output_stream_url": "https://build-output.heroku.com/streams/b8/b8f739ef-efb2-47e3-9d52-5d5a78577176/logs/90/90b64253-6e83-4b30-9e10-7cd2cb1e14ee.log?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQI6BAUWXGR4S77Q%2F20220224%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220224T125923Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9109322789eec0369918551b1d157181737a6f15f07bc8f734d8da3cb4254704"
        },
        "actor": {
            "id": "4cfaa5a9-456b-48a8-b807-3ec89c846433",
            "email": "thercpery@gmail.com"
        },
        "action": "update",
        "version": "application/vnd.heroku+json; version=3",
        "resource": "build",
        "sequence": null,
        "created_at": "2022-02-24T12:59:23+00:00",
        "updated_at": "2022-02-24T12:59:23+00:00",
        "published_at": "2022-02-24T12:59:23Z",
        "previous_data": {},
        "webhook_metadata": {
            "attempt": {
                "id": "a0e8158b-5c7a-4afd-9548-992c64953dea"
            },
            "delivery": {
                "id": "25ba3d65-b74d-405a-b491-92bfa14699a8"
            },
            "event": {
                "id": "92fb33a2-ef33-4da7-b1b0-fe5332627144",
                "include": "api:build"
            },
            "webhook": {
                "id": "7017a869-fe50-4543-ab6a-a034c6bb5bc6"
            }
        }
    })
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));