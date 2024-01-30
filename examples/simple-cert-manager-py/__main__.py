import pulumi
from pulumi_kubernetes.apiextensions import CustomResource
from pulumi_kubernetes.core.v1 import Namespace
from pulumi_kubernetes_cert_manager import CertManager, ReleaseArgs

# Create a sandbox namespace.
ns_name = 'sandbox'
ns = Namespace('sandbox-ns', metadata={ 'name': ns_name })

# Install a cert manager into our cluster.
manager = CertManager('cert-manager',
    install_crds=True,
    helm_options=ReleaseArgs(
        namespace=ns_name,
    ),
)

# Create a cluster issuer that uses self-signed certificates.
# This is not very secure, but has the least amount of external
# dependencies, so is simple. Please refer to
# https://cert-manager.io/docs/configuration/selfsigned/
# for additional details on other signing providers.
issuer = CustomResource('issuer',
    api_version='cert-manager.io/v1',
    kind='Issuer',
    metadata={
        'name': 'selfsigned-issuer',
        'namespace': ns_name,
    },
    spec={
        'selfSigned': {},
    },
    opts=pulumi.ResourceOptions(depends_on=[manager]),
)

pulumi.export('cert_manager_status', manager.status)
