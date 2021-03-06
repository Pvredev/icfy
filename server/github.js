const nconf = require('nconf');
const axios = require('axios');

const repoUrl = repoSlug => `https://api.github.com/repos/${repoSlug}`;
const authHeaders = () => ({ headers: { Authorization: `token ${nconf.get('github:token')}` } });

exports.getPRComments = (repo, prNum) =>
	axios.get(`${repoUrl(repo)}/issues/${prNum}/comments`, authHeaders());

exports.createPRComment = (repo, prNum, body) =>
	axios.post(`${repoUrl(repo)}/issues/${prNum}/comments`, { body }, authHeaders());

exports.editPRComment = (repo, commentId, body) =>
	axios.patch(`${repoUrl(repo)}/issues/comments/${commentId}`, { body }, authHeaders());

exports.deletePRComment = (repo, commentId) =>
	axios.delete(`${repoUrl(repo)}/issues/comments/${commentId}`, authHeaders());

exports.getActionRunArtifacts = (repo, buildId) =>
	axios.get(`${repoUrl(repo)}/actions/runs/${buildId}/artifacts`, authHeaders());

exports.getActionRunArtifactArchiveStream = (repo, artifactId) =>
	axios.get(`${repoUrl(repo)}/actions/artifacts/${artifactId}/zip`, {
		responseType: 'stream',
		...authHeaders(),
	});
