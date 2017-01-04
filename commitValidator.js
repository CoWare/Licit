import  Logger from './Logger.js';
const fs = require('fs');
const exec = require('child_process').execSync;
const path = require('path');

const protectedBranches = ['master', 'develop', 'release'];
const branchNames = [
  'fix/#ISSUE_ID/brief_description',
  'chore/#ISSUE_ID/brief_description',
  'feature/#ISSUE_ID/brief_description'
];
const commitMessageFormat = 'issue #ISSUE_ID | brief_description';

const getBranch = () => {
  const currentBranch = exec('git symbolic-ref HEAD 2> /dev/null || git rev-parse --short HEAD 2> /dev/null');
  if (!currentBranch) {
    throw new Error('Can not determine branch 😂.');
  }
  return currentBranch.toString().split('\n')[0].replace('refs/heads/', '').toLowerCase();
};

const validateBranchName = () => {
  const branchName = getBranch();
  const issueType = branchName.split('/')[0];
  const issueTypes = branchNames.map(branch => branch.split('/')[0]);

  if (~protectedBranches.indexOf(branchName)) {
    Logger.log(`\u001b[42m You are on [Develop, Master, or Release branch]\u001b[49m 💪.`);
    return true;
  }

  if (!~branchName.indexOf('/')) {
    Logger.log(`\u001b[31mInvalid branch naming convention\u001b[35m
            USAGE: fix/#ISSUE_ID/brief_description
                   chore/#ISSUE_ID/brief_description
                   feature/#ISSUE_ID/brief_description, 😂.`);
    return false;
  }

  const branchType = issueTypes.filter(type => type === issueType)[0];
  const issueIndex = branchNames[0].split('/').indexOf('#ISSUE_ID');
  const branchID = branchName.split('/')[issueIndex];

  if (!branchType) {
    return false;
  }

  if (/^\d+$/.test(branchID[issueIndex].replace('#', ''))) {
    Logger.log(`\u001b[42m Perfect Branch\u001b[49m 💪`);
    return true;
  } else if (issueIndex < 0) {
    Logger.log(`\u001b[31mInvalid branch name! Missing "#" in branch name\u001b[49m 😂.`);
    return false;
  } else if (branchName.indexOf('/#') < 0) {
    Logger.log(`\u001b[31mInvalid branch name!\u001b[35m
            USAGE: ${branchNames[0]}`);
    return false;
  }
  Logger.log(`\u001b[31mFollow the right convention!\u001b[35m
          USAGE: [${branchName[0]}] 😂.`);
  return false;
};

const validateCommitMessage = (msg) => {
  const message = msg.toString();

  if (msg === '') {
    Logger.log(`\u001b[31mCommit message cannot be empty\u001b[35m 😂`);
    return false;
  } else if (message.substring(0, 7) !== 'issue #') {
    Logger.log(`\u001b[31mRemember to start your commit messages with 'issue #'\u001b[35m 😂.`);
    return false;
  } else if (!(~message.indexOf('|') || ~message.indexOf(' | '))) {
    Logger.log(`\u001b[31mRemember to follow convention\u001b[35m
            USAGE: [${commitMessageFormat}]. Missing pipe or space in-between 😂.`);
    return false;
  }
  const messageID = message.split(' | ')[0].replace('issue #', '');

  if (/^\d+$/.test(messageID)) {
    Logger.log(`\u001b[42m Perfect Commit\u001b[49m 💪`);
    return true;
  }
  Logger.log(`\u001b[31mCommit message does not follow\u001b[35m [${commitMessageFormat}] 😂.`);
  return false;
};

const checker = (data) => {
  if (validateBranchName(data) && validateCommitMessage(data)) {
    return process.exit(0);
  }
  return process.exit(1);
};

const getCommitMessage = (messageFile) => {
  fs.readFile(messageFile, (err, data) => {
    checker(data.toString());
  });
};

if (process.argv && process.argv.length >= 3 && process.argv[2] === 'commit') {
  const messageFile = path.resolve(process.cwd(), '.git/COMMIT_EDITMSG');
  getCommitMessage(messageFile);
}
